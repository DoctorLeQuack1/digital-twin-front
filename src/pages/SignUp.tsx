import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/smart_city.json'; // asegúrate de tenerlo en esta ruta
import { SignUpForm } from '../components/signin-components/SignUpForm';

export const SignUp = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center md:gap-30 w-full h-screen">
      <div>
        <SignUpForm />
      </div>
      <div
        ref={animationContainer}
        className="max-w-xl max-h-xl"
      />
    </div>
  );
};