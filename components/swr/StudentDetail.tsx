import * as React from 'react';
import useSWR from 'swr';

export interface IStudentDetailProps {
    studentId: string;
}

export function StudentDetail ({studentId}: IStudentDetailProps) {
    const {data, error, mutate, isValidating} = useSWR(`/students/${studentId}`)

    return (
    <div>
        Name: {data?.name || '--'}
    </div>
  );
}
