'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/three/HeroScene'), { ssr: false });

export default function HeroSceneWrapper() {
  return <HeroScene />;
}
