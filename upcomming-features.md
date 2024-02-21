This document outlines ideas and features planned to be developed for the next releases of Parrot. 

##### i18n Design Linting

You just completed a stunning design, only to realize it might not translate seamlessly to the target platform like Android or iOS. The frustration of global design compatibility is real. Enter "i18n Design Support." This feature offers real-time feedback on unsupported styles within your design, right where the problem arises. Say goodbye to headaches and hello to a world of possibilities right within your design space.

##### Message QA

Ever released a product with a missing variant in a specific language? Or worse, an unreviewed message making it to production? Enter Message QA. No more `$welcome_message` mishaps. This feature ensures thorough language coverage and alerts you to any incomplete or unreviewed messages, making your releases seamless and error-free.

##### Parameterized Messages

Transform your messages into dynamic narratives. Inject elements such as dates, currencies, or formatted numbers directly into your message variants. Watch as your design prototypes evolve from static concepts to production-ready masterpieces, enriched by a set of realistic sample data. Elevate your design game with the power of personalized, dynamic content.

##### Support for Gender and Plural Forms

"Anna invited 3 people to **a** party," but it's not just any party—it's **her** party! Break free from generic messages. With support for gender and plural forms, personalize your messages based on context. Let every message tell a unique story.

##### Message versioning

What was the message we send to the user in version 1.2? Keep track of your localized messages right within your designs. Message versioning will connect Parrot to your Git repository and add versioning to your messages. Collaborate seamlessly between designers and developers using the power of Git.

##### Web Message Editor

Need to collaborate on languages outside of Figma? The "Web Message Editor." will cover this. Share your messages for review and collaboration beyond the Figma environment. Embrace the power of online collaboration for a smoother and more efficient workflow. Combinde with Message QA - and Message Versioning - this will be - just wow.

##### Figma Dev Mode

Parrots goal is to fix the i18n workflow flaws. With Dev Mode, we're simplifying the Design <-> Developer communication. Imagine a smoother handover process enriched with details like referenced messages, utilized inline styles, and parameters. Dev Mode is here to elevate your collaboration game, ensuring a seamless transition from design to development.

##### Parrot CLI

Parrot Command Line Interface—will be a powerhouse for developers. This tool empowers developers to effortlessly extract messages directly from your design file to the environment of their choice, whether it's iOS, Android, or beyond. Integrated into their build process or CI/CD pipeline, it ensures that messages never fall out of sync. Bid farewell to discrepancies and usher in a synchronized and efficient development journey.


##### All New Design Tab

Going global with a massive design file can be overwhelming. The All New Design Tab is your solution. Navigate through batches of operations effortlessly—switch languages, link messages, and let auto message linking handle the repetitive and error-prone tasks. Take charge of your global design strategy with ease.
