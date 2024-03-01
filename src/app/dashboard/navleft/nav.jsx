import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridViewIcon from '@mui/icons-material/GridView';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddchartIcon from '@mui/icons-material/Addchart';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

import Link from "next/link"

export default function DisabledAccordion() {
    return (
        <div className='cursor-pointer *:bg-[#376fd0] *:text-white'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography><DashboardIcon/> Dashboard</Typography>
                </AccordionSummary>
                <AccordionDetails className='*:p-3 '>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard'}>Default</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>analytics</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>SaaS</Link></Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><AutoStoriesIcon/> Pages</Typography>
                </AccordionSummary>
                <AccordionDetails className='*:p-3 '>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>profile</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>setting</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>pricing</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>chat</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-20 ' href={'/dashboard/soon'}>blank page</Link></Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-20 ' href={'/dashboard/order'}><ShoppingCartIcon/> Orders</Link></Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography><WebAssetIcon/> invoices</Typography>
                </AccordionSummary>
                <AccordionDetails className='*:p-3 '>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/invoice'}>list</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/soon'}>ditail</Link></Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-20 ' href={'/dashboard/calendar'}><CalendarMonthIcon/> Calendar</Link></Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-20 ' href={'/dashboard/soon'}><GridViewIcon/> Data Grid</Link></Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-16 ' href={'/dashboard/soon'}><AccessTimeIcon/> Date & Time</Link></Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-20 ' href={'/dashboard/chart/bar'}><AddchartIcon/> Charts</Link></Typography>
                </AccordionSummary>
                <AccordionDetails className='*:p-3 '>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/chart/bar'}>bar</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/chart/line'}>line</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/chart/pie'}>pie</Link></Typography>
                    <Typography className='hover:bg-[#669cff]'><Link className='py-3 pr-28 ' href={'/dashboard/chart/scatter'}>scatter</Link></Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography><DeveloperBoardIcon/> Developer</Typography>
                </AccordionSummary>
                <AccordionDetails className='*:p-3 '>
                    <Typography className='capitalize w-full text-center flex flex-wrap justify-center items-center'><img src="./6.jpg" className='rounded-full w-1/2' alt="" />aliasghar gholami</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}