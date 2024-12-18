import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      This is a landing Page (unProtected)
      <div>
        <Link href='/sign-in' className='link'>
          <Button>Login</Button>
        </Link>

        <Link href='/sign-up' className='link'>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
