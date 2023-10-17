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
                    <Typography>Module 1: Certificate in Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    </Typography>
                    <ol><li> GM11 - Management Functions &amp; Organization Behaviour</li><li>GM04 - Managerial Economics</li><li>GM03 - Business Statistics</li><li>FM11 - Financial &amp; Management Accounting</li><li>IS01 - Introduction to Information Technology</li><li>GM12 - Business Communication</li></ol>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Module 2 : Advanced Certificate in Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol><li>Operations Management</li><li>HR01 - Human Resource Management</li><li>MM01 - Marketing Management</li><li>GM02 - Economic and Social Environment</li><li>GM07 - Research Methodology</li><li>FM12 - Financial Management</li></ol>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Module 3: PGDM in Banking and Financial Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol><li>BFM01 - Retail Banking</li><li>BFM02 - Banking Financial Management</li><li>BFM03 - Risk Management in Banks</li><li>FM05 - Corporate Finance</li><li>FM06 - Management of Financial Services</li></ol>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Module 4: Post Graduate Diploma in Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol><li>GM06 - Business Law &amp; Corporate Governance</li><li>IB06 - International Business</li><li>GM13 - Entrepreneurial Management</li><li>GM14 - Strategic Management &amp; Ethics</li><li>GM100 - Project Work</li><li>GM12 - Business Communication</li></ol>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}