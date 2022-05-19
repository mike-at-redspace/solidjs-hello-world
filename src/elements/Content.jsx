import { createResource } from "solid-js";

const CONTENT = {
    one: `Day sales outstanding estimated time of arrival CVENT prospect market segmentation cost per lead loss aversion kickers spam score sales sequence load in sound bite martech stack monthly recurring revenue. Domain authority cancellation clause market segmentation meetings, expositions, events, and convention end of quarter ABM display & programmatic advertising conversion rate lead management draw on sales commission bounce rate content marketing. Social, military, educational, religious, and fraternal proof of concept business to consumer conversion path IPAAS cloud/data integration & tag management estimated departure time public address system always be closing lifetime value to customer acquisition cost positioning statement buying criteria complex sale DMP. Dynamic ad page authority impressions omnichannel events meetings & webinars wrap-up call analytics & management asset customer lifetime value projects & workflow Zoom customer relationship management.`,
    two: `Adobe request for information meetings, expositions, events, and convention call analytics & management drayage native/content advertising customer relationship management purchase stage closed-won social media marketing & monitoring complex sale. Traffic flow content management system workflow projects & workflow day sales outstanding campaign metrics estimated time of arrival needs assessment get-in contingency plan end of month customer relationship management prospect inbound marketing. Adobe live chat & chatbots colloquium gatekeeper space only influencers omnichannel content management system budgeting & finance org structure drip marketing campaigns. BrightCove quota advocacy loyalty & referrals hybrid event lead capture form customer relationship management audience segmentation vendor analysis weighted pipeline certified meeting professional.`,
    three: `Responsive design business to business display & programmatic advertising audience segmentation application programming interface request for tender honorarium impressions challenger sales model cross-selling. Request for proposal no-show ABM software as a service social, military, educational, religious, and fraternal audience segmentation baseline internet of things marketing sales funnel marketing funnel. Closed-lost load in specifications sales cycle Sitecore breakdown / load out / strike hosted dialer case study marketing funnel martech stack net new business display & programmatic advertising Hootsuite. Live chat & chatbots video advertising account executive responsive design lead segmentation pay-per-click asset sales cycle needs assessment end of month data protection.`
};

function createDelay() {
    return new Promise((resolve) => {
        const delay = Math.random() * 420 + 160;
        setTimeout(() => resolve(delay), delay);
    });
}

const Content = (props) => {
    const [time] = createResource(createDelay);

    return (
        <div class="tab-content">
            This content is for page "{props.page}" after {time()?.toFixed()}ms.
            <p>{CONTENT[props.page]}</p>
        </div>
    );
};

export default Content;
