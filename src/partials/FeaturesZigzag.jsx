import { CreazyTitle, SeactionHeader, ZigzagBlock } from "../components"
import FeatImage01 from '../assets/images/features-03-image-01.png'
import FeatImage02 from '../assets/images/features-03-image-02.png'
import FeatImage03 from '../assets/images/features-03-image-03.png'
const FeaturesZigzag = () => {
  return (
    <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
                <SeactionHeader
                    title="One product, unlimited solutions"
                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."
                    h="h2"
                    allert="Reach goals that matter"
                ></SeactionHeader>

                {/* Items */}
                <div className="grid gap-20">
                    <ZigzagBlock>
                        {/* image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <img src={FeatImage01} alt="Block image" className="max-w-full mx-auto md:max-w-none h-auto" width={450} height={405} />
                        </div>
                        {/* content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                <CreazyTitle css="text-xl mb-2" >More speed. Less spend</CreazyTitle>
                                <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Amet consectetur adipiscing elit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ZigzagBlock>
                    
                    <ZigzagBlock>
                        {/* image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0">
                            <img src={FeatImage02} alt="Block image" className="max-w-full mx-auto md:max-w-none h-auto" width={450} height={405} />
                        </div>
                        {/* content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                <CreazyTitle css="text-xl mb-2" >More speed. Less spend</CreazyTitle>
                                <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Amet consectetur adipiscing elit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ZigzagBlock>
                    
                    <ZigzagBlock>
                        {/* image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <img src={FeatImage03} alt="Block image" className="max-w-full mx-auto md:max-w-none h-auto" width={450} height={405} />
                        </div>
                        {/* content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                <CreazyTitle css="text-xl mb-2" >More speed. Less spend</CreazyTitle>
                                <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Duis aute irure dolor in reprehenderit</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Amet consectetur adipiscing elit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ZigzagBlock>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default FeaturesZigzag