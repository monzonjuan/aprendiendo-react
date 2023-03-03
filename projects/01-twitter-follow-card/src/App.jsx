import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export const App = () => {

    return (
        <section className="App">
            <TwitterFollowCard userName="lionelmessi" initialIsFollowing={true} >
            Lionel Andres Messi
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="goku" >
            Kakaroto
            </TwitterFollowCard>
        </section>
    )
}
