'use strict';

const INCLUDE_RE = /^```guide$(.+?)^```$/sgm;

module.exports = (md) => {
    md.core.ruler.before('normalize', 'guide_generator', (state) => {

        state.src = state.src.replace(INCLUDE_RE, (match, p1, offset, string) => {
            console.log(p1);
            console.log(JSON.parse(p1), p1, offset);
            return match;
        })
    });
};