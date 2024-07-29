import React from 'react';
import { ConversationI } from '../../hooks/useGetConversations';
import userConverstaion from '../../zustand/useConversation';

interface ConversationProps{
    conversation: ConversationI,
    emoji: string,
    lastIndex: boolean
}

const Conversation: React.FC<ConversationProps> = ({conversation, emoji, lastIndex}) => {
	const {selectedConversation, setSelectedConversation} = userConverstaion();

	const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
       <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected? "bg-sky-500": ""}
		`}
		onClick={() => {
			setSelectedConversation(conversation);
		}}
		>
 				<div className='avatar online'>
 					<div className='w-12 rounded-full'>
 						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIndex && <div className='divider my-0 py-0 h-1' />}
    </>
  ) 
}

export default Conversation
