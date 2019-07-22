import React from 'react';
import style from 'styled-components';

const PersonContainer = style.div`
    display: flex;
    background: rgba(96, 96, 152, 0.2);
    padding: 10px;
`;
const NameColumn = style.div`
    width: 200px;
    text-align: left;
    overflow: hidden;
`;
const ActionColumn = style.div`
    display: flex;
    width: 200px;
    background: rgba(188, 234, 188, 0.4);
    justify-content: center;
`;

function PersonPlaceholder({ person, removeAction }) {
    return (
        <PersonContainer>
            <NameColumn>{person.name}</NameColumn>
            <ActionColumn>
                <button onClick={() => removeAction(person.id)}>Remove</button>
            </ActionColumn>
        </PersonContainer>);
};
export default PersonPlaceholder;