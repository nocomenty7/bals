import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Sparkles, Trophy, Users, ShieldAlert, Award } from 'lucide-react';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams.q as string | undefined;

  // Backwards compatibility: If legacy share link (e.g. ?q=5 or ?q=uuid) is detected, redirect to /play
  if (q) {
    redirect(`/play?q=${q}`);
  }

  return (
    <div className="relative min-h-[100dvh] w-full max-w-2xl mx-auto flex flex-col justify-between overflow-x-hidden bg-[#080911] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.08),_transparent_60%)] text-white font-sans">
      
      {/* Top Header */}
      <header className="w-full h-16 shrink-0 flex items-center justify-center border-b border-zinc-900 bg-[#080911]/85 backdrop-blur-md sticky top-0 z-40">
        <div className="relative h-11 w-32 flex items-center justify-center">
          <img
            src="/logo.png?v=2"
            alt="UPick Logo"
            className="h-10 w-auto object-contain pt-[2px]"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col px-6 py-10">
        
        {/* Hero Title Section */}
        <section className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-3.5 py-1 text-xs font-bold text-yellow-500 tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5" /> premium entertainment
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-snug tracking-tight text-neutral-100 whitespace-pre-line">
            UPick - 세상의 모든 극한 밸런스 게임,{"\n"}당신의 숨겨진 취향을 발견하세요.
          </h1>
        </section>

        {/* CTA Button Block */}
        <section className="w-full max-w-sm mx-auto mb-10">
          <Link
            href="/play"
            className="flex items-center justify-center gap-2 rounded-2xl bg-white hover:bg-neutral-200 text-zinc-950 font-black text-lg px-8 h-14 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            🎮 밸런스 게임 시작하기
          </Link>
        </section>

        {/* Rich SEO Content Body (Blog Post Style) */}
        <article className="space-y-8 text-neutral-300 leading-relaxed text-sm md:text-base border-t border-zinc-900/60 pt-8 max-w-xl mx-auto">
          
          <p className="indent-4 leading-loose">
            현대인들은 매일 수많은 선택의 기로에 놓입니다. 오늘 점심은 무엇을 먹을지, 주말에는 어떤 여가를 즐길지, 혹은 인간관계에서 어떤 태도를 취해야 할지 끊임없이 고민합니다. <strong className="text-neutral-100 font-extrabold">'UPick(유픽)'</strong>은 이러한 일상적인 고민부터, 상상조차 하기 싫은 극한의 딜레마까지 200개가 넘는 다양한 밸런스 게임을 통해 여러분의 숨겨진 심리와 취향을 탐구하는 종합 엔터테인먼트 플랫폼입니다.
          </p>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-900/20 p-5 space-y-3">
            <h2 className="text-base md:text-lg font-black text-neutral-200 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" /> 왜 사람들은 밸런스 게임에 열광할까요?
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              심리학적으로 인간은 극단적인 상황에 놓였을 때 비로소 자신의 본성과 우선순위를 가장 명확하게 드러낸다고 합니다. UPick은 일상적인 재미를 넘어, 나의 무의식적인 선호도와 타인의 선호도를 직관적인 그래프로 매칭하여 새로운 자아 탐색을 지원합니다.
            </p>
          </div>

          {/* Categories Grid Description */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-neutral-100 flex items-center gap-2 border-b border-zinc-900 pb-2">
              <Award className="h-5 w-5 text-indigo-400" /> UPick이 제공하는 8가지 취향 분석 카테고리
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">1. 일상</span>
                스마트폰 컬러, 노트 속지 등 매일 마주하는 소소한 취향을 알아봅니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">2. 음식</span>
                짜장면 vs 짬뽕, 부먹 vs 찍먹 등 영원히 끝나지 않을 미식의 세계를 다룹니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">3. 스타일</span>
                패션, 헤어스타일, 뷰티 등 나를 표현하는 가장 이상적인 방법을 찾아봅니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">4. 여가</span>
                산 vs 바다, 호캉스 vs 배낭여행 등 당신의 휴식 스타일을 분석합니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">5. 돈</span>
                로또 일시불 vs 연금복권 등 자본주의 사회에서의 경제적 가치관을 묻습니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">6. 관계</span>
                남사친/여사친 문제, 연락 빈도 등 인간관계와 연애에서의 예민한 딜레마를 다룹니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">7. 상상</span>
                타임머신, 초능력, 좀비 사태 등 영화 속 주인공이 되어보는 시간을 가집니다.
              </li>
              <li className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                <span className="font-extrabold text-neutral-100 block mb-1">8. 극한 밸런스게임</span>
                "차라리 안 고를래!"라는 말이 절로 나오는 매운맛 딜레마로 당신의 멘탈을 테스트합니다.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-900/20 p-5 space-y-3">
            <h2 className="text-base md:text-lg font-black text-neutral-200 flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-400" /> 공감과 분석의 가치
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              이 모든 테스트는 익명으로 진행되며, 여러분이 선택한 결과는 실시간 데이터화되어 다른 사람들은 어떤 선택을 했는지 성별, 연령별 비율 통계로 확인할 수 있습니다. 나와 같은 선택을 한 사람이 얼마나 되는지 확인하며 긴밀한 공감대를 형성해 보세요.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-red-500/5 p-5 space-y-3">
            <h2 className="text-base md:text-lg font-black text-red-400 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" /> 별도 회원가입 없는 미니멀리즘
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              UPick은 사용자 편의를 최우선으로 합니다. 불필요한 회원가입이나 개인정보 입력 없이, 간단한 익명 프로필(성별, 연령대) 탭 한번으로 모든 콘텐츠를 광고와 함께 쾌적하게 즉각 시작하실 수 있습니다.
            </p>
          </div>

          <p className="text-center text-sm text-zinc-400 font-extrabold pt-4">
            지금 바로 하단의 버튼을 눌러 당신의 한계를 시험할 밸런스 게임을 시작하세요!
          </p>
          
          <div className="w-full pt-2">
            <Link
              href="/play"
              className="flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-base px-8 h-12 border border-zinc-800 transition-all"
            >
              🚀 밸런스 게임 플레이하러 가기
            </Link>
          </div>

        </article>

      </main>

      {/* Global Trust Footer */}
      <footer className="w-full py-6 shrink-0 border-t border-zinc-900/40 text-center flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-3 text-xs text-neutral-500 font-extrabold">
          <Link href="/privacy" className="hover:text-neutral-300 transition-all">개인정보처리방침</Link>
          <span className="text-zinc-800">|</span>
          <Link href="/terms" className="hover:text-neutral-300 transition-all">이용약관</Link>
          <span className="text-zinc-800">|</span>
          <a href="mailto:nocomenty7@gmail.com" className="hover:text-neutral-300 transition-all">문의하기</a>
        </div>
        <p className="text-[10px] text-neutral-600">© 2026 UPick. All rights reserved.</p>
      </footer>
      
    </div>
  );
}
