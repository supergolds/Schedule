import React from 'react';
import './Halgeo.css';

const Halgeo = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일은 뭘까요?
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default Halgeo;