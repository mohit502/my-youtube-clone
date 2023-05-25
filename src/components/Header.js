import React, { useEffect , useState} from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    //make an api call
    // if the difference between the api calls in less than 200 ms 
    // decline api call
    /**
     * keypress - i
     *  re-Renders
     * useEffect
     * setTimeout is start -> api called after 200ms
     * 
     * keypress -ip
     * destroy the old component(useEffect Return method)
     * component re-render      
     * useEffect
     * setTimeout is start -> api called after 200 ms 
     * 
     *
     */
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    console.log(json[1]);
  }

  useEffect(()=>{
    const timer = setTimeout(()=> getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);
  
  return (
    <div className='grid grid-flow-col p-4 border bottom-1 shadow-lg'>
      <div className='flex  border-black col-span-1 pt-2' >
       <img className='h-6 hover:cursor-pointer' onClick={()=> toggleMenuHandler()}  src='https://cdn-icons-png.flaticon.com/512/3917/3917215.png' alt='hamburger-menu'/>
       <img className='h-6 mx-4 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' alt='youtube-logo'/>
      </div>

      <div className='pl-72  col-span-10'>
        <input className='p-[8px] pl-4 border border-gray-400 w-1/2 rounded-l-full' type='text' value={searchQuery}
        onChange={ (e) => setSearchQuery(e.target.value) }/>
        <button className=' hover:cursor-pointer bg-slate-200  py-[5.2px] px-[4px] border border-gray-400 rounded-r-full border-l-0' ><svg className='inline-block mb-[5px] mx-4' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" id="search"><path d="M448.3 424.7L335 311.3c20.8-26 33.3-59.1 33.3-95.1 0-84.1-68.1-152.2-152-152.2-84 0-152 68.2-152 152.2s68.1 152.2 152 152.2c36.2 0 69.4-12.7 95.5-33.8L425 448l23.3-23.3zM120.1 312.6c-25.7-25.7-39.8-59.9-39.8-96.3s14.2-70.6 39.8-96.3 59.9-40 96.2-40c36.3 0 70.5 14.2 96.2 39.9s39.8 59.9 39.8 96.3-14.2 70.6-39.8 96.3c-25.7 25.7-59.9 39.9-96.2 39.9-36.3.1-70.5-14.1-96.2-39.8z"></path></svg></button>
      </div>

      <div className='col-span-1'>
        <img className='h-10  '  alt='user-icon' src ='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      </div>
    </div>
  )
}

export default Header;