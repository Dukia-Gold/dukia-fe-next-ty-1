"use client"

import useAuth from '@/api/auth/useAuth';
// import withAuth from '@/lib/withAuth';

const DashboardPage = () => {
  const { logout } = useAuth();
  const secret = process.env.JWT_SECRET_KEY;

  console.log(secret);

  return (
    <div><button onClick={logout}>Logout</button>DashboardPage</div>
  )
}

export default DashboardPage

// export default withAuth(DashboardPage)