# Backend Integration Guide

This guide explains how to integrate the refactored frontend with your backend API.

## Current State

The frontend currently uses **mock data** stored in `src/services/dataService.ts`. To connect to a real backend:

## Step 1: Update Service Functions

Replace mock implementations with actual API calls in `src/services/dataService.ts`:

### Example: Student Progress API

```typescript
// Before (Mock)
export async function fetchStudentProgress(studentId: string) {
  return {
    studentId,
    overallProgress: 78,
    subjects: dashboardSubjectsData,
    milestones: dashboardMilestonesData,
  };
}

// After (Real API)
export async function fetchStudentProgress(studentId: string): Promise<StudentProgress> {
  try {
    const response = await fetch(`${API_BASE_URL}/students/${studentId}/progress`);
    if (!response.ok) throw new Error('Failed to fetch progress');
    return response.json();
  } catch (error) {
    console.error('Error fetching student progress:', error);
    throw error;
  }
}
```

### Example: Syllabus API

```typescript
// Before (Mock)
export async function fetchSyllabus(subject: string) {
  return subjectSyllabusData[subject as keyof SubjectSyllabus] || [];
}

// After (Real API)
export async function fetchSyllabus(subject: string): Promise<SyllabusChapter[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/syllabus/${subject}`);
    if (!response.ok) throw new Error('Failed to fetch syllabus');
    return response.json();
  } catch (error) {
    console.error('Error fetching syllabus:', error);
    throw error;
  }
}
```

## Step 2: Add API Configuration

Create `src/config/api.ts`:

```typescript
/**
 * API Configuration
 */

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Student Endpoints
  STUDENT_PROGRESS: `${API_BASE_URL}/students/:studentId/progress`,
  STUDENT_DATA: `${API_BASE_URL}/students/:studentId`,

  // Syllabus Endpoints
  SYLLABUS: `${API_BASE_URL}/syllabus/:subject`,
  CHAPTERS: `${API_BASE_URL}/syllabus/:subject/chapters`,

  // Milestones Endpoints
  MILESTONES: `${API_BASE_URL}/milestones`,

  // Auth Endpoints
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
};

export { API_BASE_URL };
```

## Step 3: Create API Client (Optional)

Create `src/services/apiClient.ts` for better request handling:

```typescript
/**
 * Centralized API Client
 */

import { API_BASE_URL } from '@/config/api';

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = { ...this.defaultHeaders, ...config.headers };

    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchConfig: RequestInit = {
      method: config.method || 'GET',
      headers,
    };

    if (config.body) {
      fetchConfig.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, fetchConfig);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(`API Error [${config.method || 'GET'} ${endpoint}]:`, error);
      throw error;
    }
  }

  get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', headers });
  }

  post<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body, headers });
  }

  put<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', body, headers });
  }

  delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', headers });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
```

## Step 4: Update Service Calls

Update `src/services/dataService.ts` to use the API client:

```typescript
import { apiClient } from './apiClient';

export async function fetchStudentProgress(studentId: string): Promise<StudentProgress> {
  return apiClient.get<StudentProgress>(`/students/${studentId}/progress`);
}

export async function fetchSyllabus(subject: string): Promise<SyllabusChapter[]> {
  return apiClient.get<SyllabusChapter[]>(`/syllabus/${subject}`);
}
```

## Step 5: Environment Variables

Create `.env` and `.env.local` files:

```env
# .env
VITE_API_BASE_URL=http://localhost:5000/api

# For production
# VITE_API_BASE_URL=https://api.yourdomain.com
```

## Step 6: Handle Loading & Error States

Create a hook for data fetching in `src/hooks/useFetch.ts`:

```typescript
/**
 * Custom Hook for API Data Fetching
 */

import { useState, useEffect } from 'react';
import type { ApiResponse } from '@/types';

interface UseFetchOptions {
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
}

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  options: UseFetchOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchFn();
        if (isMounted) {
          setData(result);
          setError(null);
          options.onSuccess?.(result);
        }
      } catch (err) {
        if (isMounted) {
          const error = err instanceof Error ? err : new Error('Unknown error');
          setError(error);
          options.onError?.(error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn, options]);

  return { data, isLoading, error };
}
```

## Step 7: Update Components to Use Real Data

Example: Update `DashboardPreview.tsx`:

```typescript
import { useFetch } from '@/hooks/useFetch';
import { fetchStudentProgress } from '@/services';

const DashboardContent = ({ studentId }: { studentId: string }) => {
  const { data: progress, isLoading, error } = useFetch(
    () => fetchStudentProgress(studentId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Welcome back, Student</h3>
      <p>{progress.overallProgress}% Progress</p>
      {/* Render progress data... */}
    </div>
  );
};
```

## Step 8: Update StudySheetsSection

Example: Dynamic syllabus loading:

```typescript
import { useFetch } from '@/hooks/useFetch';
import { fetchSyllabus } from '@/services';

export default function StudySheetsSection() {
  const [activeSubject, setActiveSubject] = useState<SubjectType>('Physics');
  
  const { data: chapters, isLoading, error } = useFetch(
    () => fetchSyllabus(activeSubject),
    {
      onError: (error) => console.error('Failed to load syllabus:', error),
    }
  );

  if (isLoading) return <div>Loading syllabus...</div>;
  if (error) return <div>Error loading syllabus</div>;

  return (
    <SyllabusTable 
      columns={syllabusColumns} 
      data={chapters || []} 
    />
  );
}
```

## Step 9: Authentication

Create `src/services/authService.ts`:

```typescript
import { apiClient } from './apiClient';

export async function login(email: string, password: string) {
  const response = await apiClient.post('/auth/login', { email, password });
  // Store token
  localStorage.setItem('authToken', response.token);
  return response;
}

export async function register(email: string, password: string, name: string) {
  const response = await apiClient.post('/auth/register', { 
    email, 
    password, 
    name 
  });
  localStorage.setItem('authToken', response.token);
  return response;
}

export function logout() {
  localStorage.removeItem('authToken');
}

export function getAuthToken() {
  return localStorage.getItem('authToken');
}
```

## Step 10: Error Handling & Logging

Create `src/utils/errorHandler.ts`:

```typescript
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public context?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof Error) {
    return new ApiError(500, error.message);
  }

  return new ApiError(500, 'An unknown error occurred');
}
```

## Checklist for Backend Integration

- [ ] Create API client utility
- [ ] Define API endpoints and configuration
- [ ] Update service functions with real API calls
- [ ] Add environment variables
- [ ] Create loading and error state in components
- [ ] Implement authentication flow
- [ ] Add error handling and logging
- [ ] Test all API endpoints
- [ ] Add loading skeletons/placeholders
- [ ] Implement retry logic for failed requests
- [ ] Add request/response interceptors (optional)
- [ ] Set up API documentation

## Testing Backend Integration

1. **Mock Backend** - Use MSW (Mock Service Worker) for testing
2. **Unit Tests** - Test service functions with mocked API calls
3. **Integration Tests** - Test components with real data
4. **E2E Tests** - Test complete user flows

## Troubleshooting

### CORS Errors
- Ensure backend has proper CORS headers
- Update API_BASE_URL to match backend domain
- Use proxy in development if needed

### Authentication Issues
- Verify token storage and retrieval
- Check token expiration handling
- Implement token refresh logic

### Network Errors
- Implement retry logic
- Add timeout handling
- Log errors for debugging

## Next Steps

1. Set up backend API
2. Define API contracts (OpenAPI/Swagger)
3. Implement API client
4. Update service functions
5. Test integration
6. Deploy to production
