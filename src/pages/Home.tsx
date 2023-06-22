import { TimelineDivider } from "@/components/TimelineDivider";
import React from "react";


const MAILCHIMP_NEWSLETTER_URL = import.meta.env.VITE_MAILCHIMP_NEWSLETTER_URL
export const Home = () => {

    React.useEffect(() => {
        window.open(MAILCHIMP_NEWSLETTER_URL)
    }, []);

    return (
        <TimelineDivider text="Bienvenue dans la newsletter de Fit'Distance 💪" />
    );
};
