import React from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import Title from "@/components/ui/Title";
import {CiSearch} from "react-icons/ci";
import SearchItems from "@/components/ui/SearchItems";
import {IoIosCloseCircle} from "react-icons/io";

const AddProduct = ({categoryNames, setIsProductModal}) => {
    return (<div className="searchModal">
        <OutsideClickHandler
            onOutsideClick={() => setIsProductModal(false)}
        >
            <div>
                <div className="addProductModalContent">
                    <div className="pb-5 text-center">
                        <Title addedClass="modalTitle">Add A New Product</Title>
                    </div>
                    <form>
                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Choose an image</span>
                            <input type="file" name="image" id="image"/>
                        </div>

                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Title</span>
                            <input className="formInput" type="text" name="productName" id="productName"
                                   placeholder="Please add the product name/title."/>
                        </div>

                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Description</span>
                            <textarea className="formTextArea" name="productDescription" id="productDescription"
                                      placeholder="Please add the product description."></textarea>
                        </div>

                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Category</span>
                            <select name="productCategories" id="productCategories"
                                    className="formSelectBox text-secondary">
                                <option label="Please select a category"></option>
                                {categoryNames.map((category) => (
                                    <option key={category._id} value={category._id}>{category.title}</option>))}
                            </select>
                        </div>

                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Prices</span>
                            <div className="flex flex-wrap justify-between">
                                <input className="modalFormPriceInput no-spinner" type="number"
                                       name="productPriceSmall" id="productPriceSmall"
                                       placeholder="Small"/>
                                <input className="modalFormPriceInput no-spinner" type="number"
                                       name="productPriceMedium" id="productPriceMedium"
                                       placeholder="Medium"/>
                                <input className="modalFormPriceInput no-spinner" type="number"
                                       name="productPriceLarge" id="productPriceLarge"
                                       placeholder="Large"/>
                            </div>
                        </div>

                        <div className="flex flex-col text-sm mt-6">
                            <span className="font-semibold mb-1">Extra</span>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex flex-wrap justify-between flex-1">
                                    <input className="modalFormPriceInput " type="text"
                                           name="productExtraItem" id="productExtraItem"
                                           placeholder="Item"/>
                                    <input className="modalFormPriceInput no-spinner" type="number"
                                           name="productExtraPrice" id="productExtraPrice"
                                           placeholder="Price"/>
                                    <button type="button" className="bg-primary w-12 h-12 rounded-full">+</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="inline-block border border-primary px-3 mt-3 rounded-xl text-xs text-primary">Ketchup<button
                                    className="pl-2">x</button></span>
                                <span
                                    className="inline-block border border-primary px-3 mt-3 rounded-xl text-xs text-primary">Mayonese<button
                                    className="pl-2">x</button></span>
                                <span
                                    className="inline-block border border-primary px-3 mt-3 rounded-xl text-xs text-primary">Mustard<button
                                    className="pl-2">x</button></span>
                            </div>
                        </div>

                        <div className="flex mt-6 justify-end content-end">
                            <button className="btn-form" type="submit">Create</button>
                        </div>
                    </form>
                    <button className="absolute top-4 right-4" onClick={() => setIsProductModal(false)}>
                        <IoIosCloseCircle size={25} className="text-primary hover:text-white transition-all"/>
                    </button>
                </div>
            </div>
        </OutsideClickHandler>
    </div>);
};

export default AddProduct;
