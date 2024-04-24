"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default function AuthPage() {
  // const origin = window.origin.location;
  const origin = process?.env?.NEXT_PUBLIC_SITE_URL;
  const supabase = createClientComponentClient();

  return (
    <>
      <div id='AuthPage' className='w-full min-h-screen bg-white'>
        <div className='w-full flex items-center justify-center p-5 border-b-gray-300'>
          <Link href='/' className='min-w-[170px]'>
            <img width='170' src='/images/logo.svg' />
          </Link>
        </div>

        <div className='w-full flex items-center justify-center p-5 border-b-gray-300'>
          Login / Register
        </div>

        <div className='max-w-[400px] mx-auto px-2'>
          <Auth
            onlyThirdPartyProviders
            redirectTo={`${origin}/auth/callback`}
            supabaseClient={supabase}
            providers={["google", "github"]}
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      </div>
    </>
  );
}
