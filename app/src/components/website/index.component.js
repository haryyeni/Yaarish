import React from 'react';
import WebsiteHeaderV2 from './partials/header/header.component';
import WebsiteFooterV2 from './partials/footer/footer.component';
import HomepageComponentV2 from './homepage/homepage.component';
import PrivacyPolicyComponentV2 from './privacy-policy/privacy-policy.component';
import TermsandConditionComponentV2 from './terms-conditions/terms-conditions.component';

export default function WebsiteIndexComponent(props){

    const AllPages = {
        home : <HomepageComponentV2 />,
        privacyPolicy : <PrivacyPolicyComponentV2 />,
        termsandconditions : <TermsandConditionComponentV2/>
    }
    return <>
        <div className='body-wrapper'>
            {/* Header */}
            <WebsiteHeaderV2 />

            {/* Layout */}
            {
                AllPages[props?.activePage]
            }

            <WebsiteFooterV2 />
            {/* Footer */}
        </div>
    </>
}