import { useState, useCallback } from 'react';
import { ApiResponse } from '../types/common.types';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async (
    promise: Promise<ApiResponse<T>>,
    options: UseApiOptions<T> = {}
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await promise;
      
      if (response.success && response.data) {
        setData(response.data);
        options.onSuccess?.(response.data);
      } else {
        throw new Error(response.error || 'An error occurred');
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unknown error occurred');
      setError(error);
      options.onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    error,
    isLoading,
    execute,
  };
} 