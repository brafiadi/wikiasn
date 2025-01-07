// CheckContributorButton.tsx
'use client';

import { loginUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CheckContributorButton = ({ email }: { email: string }) => {
   const [loading, setLoading] = useState(false);

  const checkContributor = async () => {
    setLoading(true);
    try {
      if (email) {
        await loginUser(email);
      }
    } catch (error) {
      console.error('Error checking contributor:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={checkContributor} className="shadow-sm">
      {loading ? 'Checking...' : 'Check Contributor'}
    </Button>
  );
};

export default CheckContributorButton;