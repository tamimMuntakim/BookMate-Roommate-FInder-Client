import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className='mb-2 text-2xl  md:mb-4 md:text-4xl font-bold text-secondary'>Frequently Asked Questions (FAQ)</h1>
            <div className="join join-vertical bg-base-300 w-full rounded-md md:rounded-xl overflow-hidden">
                <div className="collapse collapse-arrow join-item border-slate-300 border-b-2 dark:border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do we verify roommate profiles?</div>
                    <div className="collapse-content text-sm">We require government ID + utility bill verification, social media cross-checking, and manual profile reviews to ensure safety.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-slate-300 border-b-2 dark:border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How are payments handled?</div>
                    <div className="collapse-content text-sm">We don't process payments but provide split-bill templates and partner with trusted payment apps for secure transactions.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-slate-300 border-b-2 dark:border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">What if my roommate stops paying rent?</div>
                    <div className="collapse-content text-sm">We provide legally vetted roommate agreements and connect you with local tenant rights resources to resolve conflicts.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-slate-300 border-b-2 dark:border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Can I visit the place in person before confirming the booking?</div>
                    <div className="collapse-content text-sm">Yes! We encourage in-person visits through our platform but for a limited number of times depending on the current tenants.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-slate-300 border-b-2 dark:border-b-1">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Does we have hidden charges at the end ?</div>
                    <div className="collapse-content text-sm">Nope. We provide completely charge-free and middleman-free service using out platform.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;