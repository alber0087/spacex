import { useState, useEffect } from 'react';
import { Heading, Spinner } from '@chakra-ui/react';
import { LaunchItem } from "./LaunchItem";
import '.././main.css'

import * as API from "../services/launches";

export function LaunchList () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);

    return (
        <>
            <Heading align="left" as="h1" size="md" m={4}>
              SpaceX Launches
            </Heading>
            {launches.length === 0 ? (
                <div className="spinner">
                    <Spinner
                        className="spinner"
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
                ) : (
                    <section>
                        {launches.map((launch) => (
                            <LaunchItem key={launch.flight_number} {...launch} />
                        ))}
                    </section> 
                )}
        </>
    );
}

