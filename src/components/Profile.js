import React from 'react';

const VisionariesProfileCards = () => {
    const visionaries = [
        {
            name: 'Mr.Pradeep Gurung',
            description: '<b>Quiz Contest Strategist & Director </b><br/> Role: Conceptual Visionary and Contest Architect.',
            image: 'buro.png',
        },
        {
            name: 'Mr. Saurav Khati',
            description: '<b>Lead Game Architect & Creative Strategist.</b><br/>Role: Designer of Gameplay Layout and Dynamics.',
            image: 'boss.jpg',
        },
        {
            name: 'Mr. Sundeep Sharma',
            description: '<b>Software Development  Lead&nbsp;&nbsp;</b><br/><br/>Role: Technical Architect and Web Design Expert.',
            image: 'sundeep.png',
        },
    ];

    return (
        <div className=" pt-20">
            <h2 className="text-center text-4xl font-bold mb-10" style={{
                color:"cyan",
                opacity:"0.8"
            }}>
                Meet the Visionaries Behind the Quiz Contest
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
                {visionaries.map((visionary, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 m-4 text-center"
                        style={{ width: '300px', transition: 'transform 0.3s', cursor: 'pointer' }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                        <img
                            src={visionary.image}
                            alt={visionary.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{visionary.name}</h3>
                        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: visionary.description }}></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisionariesProfileCards;
