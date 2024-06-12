import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title'
import SearchItems from '../ui/SearchItems';
import {CiSearch} from "react-icons/ci";
import {IoIosCloseCircle} from "react-icons/io";

const Search = ({setIsSearchModal}) => {
    return (
        <div className="searchModal">
            <OutsideClickHandler
                onOutsideClick={() => setIsSearchModal(false)}
            >
                <div>
                    <div className="searchModalContent">
                        <div className="pb-5">
                            <Title addedClass="modalTitle">Search</Title>
                        </div>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <CiSearch className="text-primary text-[2rem] pr-1"/>
                            </span>
                            <input className="modalInputs" placeholder="Start Type for Searching..." type="text"
                                   name="search"/>
                        </label>
                        <div>
                            <SearchItems/>
                        </div>
                        <button className="absolute top-4 right-4" onClick={()=>setIsSearchModal(false)}><IoIosCloseCircle size={25} className="text-primary hover:text-white transition-all"/>
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search
