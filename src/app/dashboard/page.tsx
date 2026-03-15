'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { User, Settings, CreditCard } from 'lucide-react';

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
      </div>
    );
  }

  if (!session) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Account</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Welcome back, {session.user?.name || 'User'}!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <User className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Profile</CardTitle>
                <CardDescription>Manage your account</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><span className="text-slate-500">Email:</span> {session.user?.email}</p>
              <p><span className="text-slate-500">Name:</span> {session.user?.name || 'Not set'}</p>
            </div>
            <Link href="/dashboard/profile">
              <Button variant="outline" className="w-full mt-4">
                Edit Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-900/30">
                <CreditCard className="h-5 w-5 text-secondary-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Billing</CardTitle>
                <CardDescription>Manage subscription</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><span className="text-slate-500">Plan:</span> Free</p>
              <p><span className="text-slate-500">Status:</span> Active</p>
            </div>
            <Link href="/dashboard/billing">
              <Button variant="outline" className="w-full mt-4">
                Manage Billing
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                <Settings className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Settings</CardTitle>
                <CardDescription>Customize preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><span className="text-slate-500">Theme:</span> System</p>
              <p><span className="text-slate-500">Notifications:</span> Enabled</p>
            </div>
            <Link href="/dashboard/settings">
              <Button variant="outline" className="w-full mt-4">
                Edit Settings
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
