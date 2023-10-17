import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>What is the duration of the program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    </Typography>
                    The duration of Pro MBA in Banking and Financial Management is 2 years
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>What is the eligibility criteria for the program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    To enroll for this program, aspirants should have minimum education qualification is Graduation or in final year of graduation. Aspirants who are working professionals can also enroll in this program.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Do you provide Placement Assurance?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Yes, we provide 100% Placement Assurance in India’s Leading Financial Banks like Kotak Mahindra Bank, Motilal Oswal, Axis Bank, etc.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Is this program applicable for aspirants who are above 30 years?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    No, the candidate should be 30 or below 30 years of age to be eligible in this program
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                <AccordionSummary aria-controls="panel25d-content" id="panel25d-header">
                    <Typography>What is the fee for this program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Program fee is INR 2,49,999 /- + 10% CTC.
                </AccordionDetails>
            </Accordion>
          
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>What are the basic requirements for this program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Aspirants should be available for 8 hours on weekdays. As the program will be 100% online with live sessions and support, aspirants should have basic supporting devices like laptop, smartphone, tablet with internet connectivity.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                    <Typography>What happens if the aspirant is not able to attend the training sessions and complete the program in the allotted time?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Aspirants are encouraged to attend all the live training sessions regularly. However, if the aspirant is unable to attend the live training sessions due to any valid reasons, he/ she will be provided with the recorded sessions at the end of the program. For the Pro MBA, aspirants need to maintain 80% attendance.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                    <Typography>What will be the mode of delivery of training sessions?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    All the sessions will be delivered online via LMS. 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                    <Typography>What is the refund policy for this program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 No, this is a non-refundable program. 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                    <Typography>Do I need to write an entrance test?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    No, there is no entrance exam to enroll in this Program.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                    <Typography>Is an online degree equivalent to a conventional degree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Yes, as per UGC circular dated 2nd September 2022, an online degree is equivalent to an offline degree and has the same weightage. 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
                    <Typography>What is the benefit of the Pro MBA?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    This program will enable learners to gain exposure to managerial function in different sectors and domains. Learning from one of the best faculty in the world, learners will gain exposure to leading problems in a business context and the necessary tools & frameworks to solve them.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
                    <Typography>Do you need a CAT score to apply?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    While traditional MBAs will require a CAT score, it is not needed while applying for the Pro MBA from Expertrons.
                </AccordionDetails>
            </Accordion>
          
        </div>
    );
}