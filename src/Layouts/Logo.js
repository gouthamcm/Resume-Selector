import { MenuBook } from '@mui/icons-material'
import { Icon } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import resume from '../Assets/resume.png'
function Logo() {
    return (
        <Box component="img" src={resume} sx={{ width: 110, height: 60, m:1}} >
            
            {/* <Icon>
                <MenuBook />
            </Icon> */}
            {/* <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUmhPz///8AZtoSfvyjxP0YgPyEs/0Ae/wAefzd6v75/P/j7v/0+f/L3v4mhf0AZNju9Pxmov3S4f7A1/6Ltv2uy/7T4/6Uu/11qv220P670/7I3P58rfsAYdeewf1Wmvzvbmb5AAADBUlEQVR4nO3d227aQBCAYcziYAyUcjBxkqZ5/7csFSi9aKTMrmeZGfT/1wjvp1llzUmZNY/ezHoB1UMYP4TxQxg/hP91Hp6fKvTrZw3d3/KEqzEtU1ujNK9FzBFu9l07q9X7rhIxQ3hI9Xyz2e690hTlwmNX0XcRzisRxcJDXeBFWIkoFfY1d+hNWIcoFY7pDsIqRKFwXXmP3oQ1iELhqfYIb8IKRKGwtu9TqE+UCetv0k/hXPvolwmP1TfpP6H2FGXC4Z5CZaJMuLirUJfoUqhK9CnUJDoVKhK9CvWIboVqRL9CraPfsVBpip6FOlN0LVSZom+hBtG5UIHoXTid6F44mehfOJUYQDjx0IggnDbFEMJJU4whnDLFIMIJxCjCcmIYYTExjrCUGEhYSIwkLCOGEhYRYwlLjv5gwoIpRhPmE8MJs4nxhLnEgMJMYkRhHjGkMIsYU5hDDCrMOPqjCuVTdCPMBM7nOyHRjfBHdul3LGF+aYEQIULrECJEaB9ChAjtQ4gQoX0IESK0DyFChPYh1BWmTr9vr3lPYdo2vXbN9ruL3lO4PIieJq/DEqHoaRBeQ4iwKIQIbyG8hjC9rPR78XTXNktL/VzdeZuEECFC+xAiRGgfQoQI7UOoK3z4V0/pda3fq6dXwI//LgbCohAivIXwGkKERSG8713bW7/Rrn/zdNf2+N8YMgkhQoT2IUSI0D6ECBHah1BX2E75gCKCsF0ctsWdPwIIp72LsS/7D6AIESJEiBAhQoQIM4UmIUSI0D6ECBHahxAhQvsQIkRoH0KECO1DiBChfQgRIrQPIUKE9iFEiNA+hAgR2ocQIUL7VIWDS+GgKDy6FB4VhevOmvNF3VpR2Fhrvky4dNnDTv62aTqpCh1uU+EmlQqb0dsQ0yhcuVTYl33bvF5tryxszr72aXeWLlwsbI6eiJ3sLMwTNtvkZae2KeP3HRnCZrPvPBjbbr/JWHWOsGlWY1qm1rLL9cdV1przhJfOw/OTXc+D+C9MsTBcCOOHMH4I44cwfn8A3eysPaJ7bhwAAAAASUVORK5CYII='/> */}
            {/* <img src={resume} /> */}
        </Box>
    )
}

export default Logo
