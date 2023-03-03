import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'lionelmessi',
        name: 'Liones Andres Messi',
        isFollowing: true
    },
    {
        userName: 'goku',
        name: 'Kakaroto',
        isFollowing: false
    },
    {
        userName: 'muskelon',
        name: 'Elon Musk',
        isFollowing: true
    },
    {
        userName:'mcdonalds',
        name: 'Mc Donals',
        isFollowing: false
    }
]

export function App () {

  return (
    <section className="App">
        {
          users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                  key={userName}  
                  userName={userName}
                  initialIsFollowing={isFollowing}
                >
                  {name}
                </TwitterFollowCard>  
          )
          )  
        }
    </section>
  )
}
