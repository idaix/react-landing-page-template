import React from 'react'
import { FeatureBlock, SeactionHeader } from '../components'
import { featuresBlocks } from '../utils/constants'



const FeaturesBlocks = () => {
  return (
    <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
                <SeactionHeader
                    title='The majority our customers do not understand their workflows.'
                    description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    h="h2"
                />
                
                {/* Items */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    {featuresBlocks.map(block => (
                        <FeatureBlock
                            key={block.id}
                            title={block.title}
                            text={block.description}
                        >
                            {block.icon}
                        </FeatureBlock>     
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesBlocks