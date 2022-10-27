import React from 'react';

const Faq = () => {
    return (
        <div className='container mx-auto'>
            <div className=' '>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        what we teach?
                    </div>
                    <div className="collapse-content">
                        <p>
                            you will find all kind of programming course here
                        </p>
                    </div>
                </div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Who is eligable for?
                    </div>
                    <div className="collapse-content">
                        <p>
                            We have courses for the students of every level. from beginner to advance.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Is it beginner friendly?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Some courses are starts from scratch specially designed for beginner. Some for advance level only. please read course description carefully.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Why choose us?
                    </div>
                    <div className="collapse-content">
                        <p>
                            We never loose hope to learner, you will find us besides you whenever you need.
                        </p>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Did we available offline?
                        </div>
                        <div className="collapse-content">
                            <p>
                                We don't like boundaries , You know what I mean, Don't you?
                            </p>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Like to know something else?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Email us... you will it in front page. THANK YOU.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;