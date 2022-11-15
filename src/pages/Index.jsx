
export const Landing = () => <h1>Landing Page (Public)</h1>;

export const HomeLogged = () => {
  
  return <h1>Home Page Logged (Private)</h1>;
};

export const Dashboard = () => <h1>Dashboard (Private)</h1>;

export const Analytics = () => (
  <h1>Analytics (Private + permission: 'analize')</h1>
);

export const Admin = () => <h1>Admin (Private + permission: 'admin')</h1>;
