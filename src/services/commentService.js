import { data } from "../assets/data/data.js";

export const commentService = {
    // getComment: async function () {
    //     try {
    //         const response = await fetch(data.api);
    //         return await response.json();
    //     } catch (error) {
    //         return { error: error && error.message };
    //     }
    // },

    addComment: async function ({ id, name, status, message, date, color }) {
        const comment = {
            id: id,
            name: name,
            status: status,
            message: message,
            date: date,
            color: color,
        };

        try {
            const response = await fetch(data.api, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment),
            });

            return await response.json();

        } catch (error) {
            console.error('Post error:', error);
            return { error: error.message };
        }
    },
};