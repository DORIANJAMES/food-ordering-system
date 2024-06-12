import React from "react";
import Image from 'next/image'


const SearchItems = () => {
    return (
        <div className="">
            <ul className={"searchModalResultsWrapper"}>
                <li className="text-black">
                    <div className="searchModalResults">
                        <div className="searchModalResultsItems">
                            <div className="image">
                                <Image src="/images/food.png" alt="" layout="fill"/>
                            </div>
                            <span>Good Pizza</span>
                            <span>$10</span>
                        </div>
                    </div>
                </li>
                <li className="text-black">
                    <div className="searchModalResults">
                        <div className="searchModalResultsItems">
                            <div className="image">
                                <Image src="/images/food.png" alt="" layout="fill"/>
                            </div>
                            <span>Good Pizza</span>
                            <span>$10</span>
                        </div>
                    </div>
                </li>
                <li className="text-black">
                    <div className="searchModalResults">
                        <div className="searchModalResultsItems">
                            <div className="image">
                                <Image src="/images/food.png" alt="" layout="fill"/>
                            </div>
                            <span>Good Pizza</span>
                            <span>$10</span>
                        </div>
                    </div>
                </li>
                <li className="text-black">
                    <div className="searchModalResults">
                        <div className="searchModalResultsItems">
                            <div className="image">
                                <Image src="/images/food.png" alt="" layout="fill"/>
                            </div>
                            <span>Good Pizza</span>
                            <span>$10</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SearchItems
