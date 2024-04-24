'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >();

  const createMeeting = () => {};

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
      <HomeCard
        imgSrc='/icons/add-meeting.svg'
        title='Meeting'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isInstantMeeting')}
        className='bg-orange-1'
      />
      <HomeCard
        imgSrc='/icons/schedule.svg'
        title='Schedule Meeting'
        description='Plan your meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-blue-1'
      />
      <HomeCard
        imgSrc='/icons/recordings.svg'
        title='View Recording'
        description='Checkout your recordings'
        handleClick={() => router.push('/recording')}
        className='bg-purple-1'
      />
      <HomeCard
        imgSrc='/icons/join-meeting.svg'
        title='Join Meeting'
        description='Via invitation link'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-yellow-1'
      />

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start an Instant Meeting'
        className='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
