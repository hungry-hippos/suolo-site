import React from 'react' 
import '../stylesheets/RankingsSection.css'

export default function RankingsSection(){
    return <div className='rankingSectionHolder'>
        <div className="rankingEntry">
            <div className='rankingText'>
                <div className="rankingNumber"># 5</div>
                <div className='rankingBodyCover'></div>
                <div className='rankingBody'>
                    <div>en</div>
                    <div className='boldText'>Start-Ups Mas Perras</div>
                    <div>segun</div>
                    <div className='italicsText'>El Chavi</div>
                </div>
            </div>
        </div>
        <div className="rankingEntry">
            <div className='rankingText'>
                <div className="rankingNumber"># 1</div>
                <div className='rankingBodyCover'></div>
                <div className='rankingBody'>
                    <div>en</div>
                    <div className='boldText'>Companias Que Me Van a Chingar</div>
                    <div>segun</div>
                    <div className='italicsText'>Carlos Munoz</div>
                </div>
            </div>
        </div>
        <div className="rankingEntry">
            <div className='rankingText'>
                <div className="rankingNumber"># 13</div>
                <div className='rankingBodyCover'></div>
                <div className='rankingBody'>
                    <div>en</div>
                    <div className='boldText'>Desarralladoras Globales</div>
                    <div>segun</div>
                    <div className='italicsText'>Nosotros</div>
                </div>
            </div>
        </div>
       
        
        
    </div>
}