import Image from 'next/image';
import cardImage from '../assets/card.jpeg';
import edit from '../assets/edit.svg'
import trashCan from '../assets/trashCan.svg'

export function PlaylistData() {
  return (
    <div className='flex items-center mt-20'>
      <Image src={cardImage} alt='' className='rounded-lg' width={300} height={300}/>
      <div className='ml-6'>
        <div className='flex items-center mb-1 gap-4'>
          <p className='text-4xl font-semibold'>Algum album</p>
          <Image src={edit} alt='' />
          <Image src={trashCan} alt='' />
        </div>
        <p className='mb-6'>15 musicas</p>
        <p>A descrição virá para cá</p>
      </div>
    </div>
  );
}