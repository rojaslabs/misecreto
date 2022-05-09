import React from 'react';
import SecretCard from './SecretCard';

const SecretList = (props) => {

    const { secrets } = props;

    return (
        <div>
            {secrets?.map((secret, i) => (
                <SecretCard
                    key={i}
                    id={secret._id}
                    title={secret.title}
                    content={secret.content}
                    age={secret.age}
                    gender={secret.gender}
                    date={secret.createdAt}
                    likes={secret.likes}
                    comments={secret.comments}
                />
            ))}
        </div>
    );
}

export default SecretList;
