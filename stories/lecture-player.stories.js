import { html } from 'lit';
import '../src/lecture-player.js';

export default {
  title: 'LecturePlayer',
  component: 'lecture-player',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <lecture-player
      style="--lecture-player-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </lecture-player>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
