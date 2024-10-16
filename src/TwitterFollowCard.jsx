import { useState } from "react";

export function TwitterFollowCard({ children, userName, initIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    const bottonText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{bottonText}</button>
            </aside>
        </article >
    );
}