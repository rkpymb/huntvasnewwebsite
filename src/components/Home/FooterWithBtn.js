import React from 'react'
import stylesMy from '../../../Styles/home.module.css'
import { FiPhoneCall, FiDownload } from "react-icons/fi";
import EnqDialog from 'components/EnqDialog';

const FooterWithBtn = () => {

    const Download = () => {
        const BroucherURL = 'https://fmenew.sgp1.cdn.digitaloceanspaces.com/smartthink/SmartThink_Expertrons_Pro_MBA.pdf'
        window.open(BroucherURL, '_blank');
    }
    return (
        <div>
            <div className={stylesMy.mobileFooter}>
                <div className={stylesMy.mobileFooterCbox}>
                  
                    <div className={stylesMy.FotterBtnBtn} onClick={Download}>
                        <FiDownload /> <span>Download Brouchers</span>
                    </div>
                    <EnqDialog Type={false} />
               </div>
            </div>
        </div>
    )
}

export default FooterWithBtn
