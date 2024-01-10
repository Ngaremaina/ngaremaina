import { Element } from "react-scroll";
import { useState } from "react";

const Background = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    
    return(
        <Element name="background">
            <div className="tabs-container">
                <div className="tab-header">
                    <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>
                    Education
                    </button>
                    <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>
                    Skills
                    </button>
                    <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>
                    Experience
                    </button>
                </div>
                <div className="tab-content">
                    <div className={activeTab === 'tab1' ? 'tab-pane active' : 'tab-pane'}>
                    Content for Tab 1
                    </div>
                    <div className={activeTab === 'tab2' ? 'tab-pane active' : 'tab-pane'}>
                    Content for Tab 2
                    </div>
                    <div className={activeTab === 'tab3' ? 'tab-pane active' : 'tab-pane'}>
                    Content for Tab 3
                    </div>
                </div>
            </div>
        </Element>
        
    )

}

export default Background