import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import EventTile from './event-tile.jsx';

/**
 * React component for the room timeline
 * 
 * @param   {string} homeserver - The homeserver URL
 * @param   {object} room - The room object
 */
export default class TimelinePanel extends PureComponent {
    static propTypes = {
        homeserver: PropTypes.string.isRequired, // Homeserver URL
        room: PropTypes.object // Room object
    };

    render() {
        // Construct timeline from room
        let timeline = [];
        if (this.props.room) {
            for (let event of this.props.room.timeline) {
                timeline.push(
                    <EventTile key={event.event.event_id} 
                        homeserver={this.props.homeserver}
                        mxEvent={event} />
                ); 
            }
        }
        
        return (
            <div className='darker-bg body-panel'>
                <ul className='list-panel'>
                    {timeline}
                </ul>
            </div>
        );
    }
}