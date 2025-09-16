import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';
import ServiceAreaMap from '@/components/ServiceAreaMap';

import heroImage from '@/public/assets/Dump-Trailer.png';
import bookingCall from '@/public/assets/phone-call.png';
import bookingOnline from '@/public/assets/book-online.png';
import bookingText from '@/public/assets/text-us.png';
import removalImage from '@/public/assets/removal-before-after.png';

const bookingMethods = [
  {
    title: 'Call Us',
    description:
      "Reach us directly by phone. We'll provide immediate assistance, answer your questions and schedule your service.",
    href: 'tel:+18883339999',
    label: '888\u00a0333\u00a09999',
    image: bookingCall,
    imageAlt: 'CleanHome agent speaking on the phone'
  },
  {
    title: 'Book Online',
    description: 'Enjoy the ease of booking online. Fill out our form and pick your preferred date and time.',
    href: '#contact',
    label: 'Book Online',
    image: bookingOnline,
    imageAlt: 'CleanHome customer booking online'
  },
  {
    title: 'Text Us',
    description:
      "Send us a quick text with your name, location and request. We'll respond promptly to confirm details.",
    href: 'sms:+18883339999',
    label: 'Text Us',
    image: bookingText,
    imageAlt: 'CleanHome customer sending a text message'
  }
];

const serviceHighlights = [
  'Fast & efficient service',
  'Eco-friendly disposal methods',
  'Transparent, volume-based pricing',
  'Experienced professionals',
  'Residential & commercial services',
  'Customer satisfaction guaranteed'
];

const faqs = [
  {
    question: 'What types of junk do you remove?',
    answer:
      'We remove most non-hazardous items including furniture, appliances, yard waste, construction debris and more. Contact us if you\'re unsure.'
  },
  {
    question: 'Do I need to be present during the junk removal?',
    answer:
      "It\'s best if you can be there, but we can arrange removal with instructions if you\'re unable to be present."
  },
  {
    question: 'What happens to the junk you collect?',
    answer:
      'We sort items to donate reusable goods, recycle materials and ensure responsible disposal of the rest.'
  },
  {
    question: 'Can you handle large-scale cleanouts?',
    answer: 'Yes! We handle jobs of all sizes, from single items to full property cleanouts.'
  },
  {
    question: "Are there items you don\'t remove?",
    answer:
      "We can\'t take hazardous materials or chemicals. Please contact us for guidance on proper disposal."
  }
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CleanHome Junk Removal & Hauling',
  url: 'https://cleanhome.com/',
  telephone: '+18883339999',
  description: 'CleanHome offers fast, eco-friendly junk removal and hauling services across Minnesota.',
  areaServed: 'Minnesota',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Minneapolis',
    addressRegion: 'MN',
    postalCode: '55555',
    addressCountry: 'US'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  priceRange: '$$'
};

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Junk Removal &amp; Hauling in Minnesota – CleanHome</title>
        <meta
          name="description"
          content="CleanHome provides fast, eco-friendly junk removal and hauling services across Minnesota. Get a free estimate online or by phone."
        />
        <link rel="canonical" href="https://cleanhome.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cleanhome.com/" />
        <meta property="og:title" content="Junk Removal &amp; Hauling in Minnesota – CleanHome" />
        <meta
          property="og:description"
          content="CleanHome offers fast, eco-friendly junk removal and hauling services across Minnesota. Book online or by phone and enjoy transparent pricing."
        />
        <meta property="og:image" content="https://cleanhome.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cleanhome.com/" />
        <meta name="twitter:title" content="Junk Removal &amp; Hauling in Minnesota – CleanHome" />
        <meta name="twitter:description" content="Fast, eco-friendly junk removal and hauling across Minnesota. Get your free estimate today." />
        <meta name="twitter:image" content="https://cleanhome.com/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section id="hero" className="hero" aria-labelledby="hero-heading">
        <div className="container hero__wrap">
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title">
              Fast, eco-friendly junk removal &amp; hauling
            </h1>
            <p className="hero__subtitle">
              CleanHome provides professional junk removal and hauling services across Minnesota, including residential, commercial, and garage cleanouts. We handle furniture, appliances, yard waste, and more — always fast, affordable, and eco-friendly.
            </p>
            <a href="#contact" className="btn btn--accent btn--lg">
              Get a free estimate
            </a>
          </div>
          <div className="hero__media">
            <Image
              src={heroImage}
              alt="CleanHome team removing junk from a home"
              className="hero__image"
              priority
              sizes="(min-width: 992px) 480px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section booking" aria-labelledby="booking-title">
        <div className="container">
          <h2 id="booking-title" className="section__title">
            Ways to book our services
          </h2>
          <div className="grid grid--3">
            {bookingMethods.map((method) => (
              <article className="card booking-card" key={method.title}>
                <div className="booking-card__media" aria-hidden="true">
                  <Image
                    src={method.image}
                    alt={method.imageAlt}
                    className="booking-card__image"
                    sizes="(min-width: 992px) 320px, 100vw"
                  />
                </div>
                <h3 className="card__title">{method.title}</h3>
                <p className="card__text">{method.description}</p>
                <a className="btn btn--accent card__btn" href={method.href}>
                  {method.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section removal" aria-labelledby="removal-title">
        <div className="container removal__wrap">
          <div className="removal__text">
            <h2 id="removal-title" className="section__title">
              We handle all junk removal &amp; hauling
            </h2>
            <ul className="removal__list">
              {serviceHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="removal__media">
            <Image
              src={removalImage}
              alt="Before and after junk removal in a garage"
              className="removal__image"
              sizes="(min-width: 992px) 480px, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials" aria-labelledby="testimonial-title">
        <div className="container">
          <h2 id="testimonial-title" className="section__title">
            What our customers say
          </h2>
          <blockquote className="testimonial">
            <p className="testimonial__text">
              “I was blown away by the professionalism of CleanHome. I booked online and they arrived the next day. They worked quickly, were very respectful of my property and made sure to recycle everything they could. I highly recommend them!”
            </p>
            <footer className="testimonial__author">— Alex Johnson, Minnesota</footer>
          </blockquote>
        </div>
      </section>

      <section id="about" className="section about" aria-labelledby="about-title">
        <div className="container about__wrap">
          <div className="about__content">
            <h2 id="about-title" className="section__title">
              About CleanHome Junk Removal &amp; Hauling
            </h2>
            <p>
              We take the stress out of junk removal. Our dedicated team safely removes unwanted items from your home or business and ensures they are recycled or donated whenever possible. We’re committed to a cleaner, greener Minnesota.
            </p>
            <a href="#contact" className="btn btn--accent">
              Learn more
            </a>
          </div>
          <div className="cost__content">
            <h3 className="cost__title">How our pricing works</h3>
            <p>
              At CleanHome we believe in transparent and fair pricing tailored to your specific needs. The cost of junk removal depends on factors like:
            </p>
            <ul className="cost__list">
              <li>Free, no-obligation estimates</li>
              <li>Pay only for the space your items take up in our truck</li>
              <li>All labor and disposal fees included</li>
            </ul>
            <a href="#contact" className="btn btn--accent">
              Get a free estimate
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section__title">
            Frequently Asked Questions
          </h2>
          <div className="faq__list">
            {faqs.map((faq) => (
              <details className="faq__item" key={faq.question}>
                <summary className="faq__question">{faq.question}</summary>
                <p className="faq__answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="container contact__wrap">
          <div className="contact__map">
            <h2 id="service-area-title" className="section__title">
              Our Service Area
            </h2>
            <ServiceAreaMap />
          </div>
          <div className="contact__form">
            <h2 id="contact-title" className="section__title">
              Send us a message
            </h2>
            <form className="form" method="post" action="#" noValidate>
              <div className="form__group">
                <label htmlFor="full-name" className="form__label">
                  Full Name*
                </label>
                <input id="full-name" name="name" className="input" type="text" required placeholder="John Doe" />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email*
                </label>
                <input id="email" name="email" className="input" type="email" required placeholder="you@example.com" />
              </div>
              <div className="form__group">
                <label htmlFor="phone" className="form__label">
                  Phone*
                </label>
                <input id="phone" name="phone" className="input" type="tel" required placeholder="(555) 555-5555" />
              </div>
              <div className="form__group">
                <label htmlFor="address" className="form__label">
                  Property address
                </label>
                <input id="address" name="address" className="input" type="text" placeholder="123 Main St, City, ZIP" />
              </div>
              <div className="form__group form__group--full">
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="form__actions form__group--full">
                <button type="submit" className="btn btn--accent">
                  Send it now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
