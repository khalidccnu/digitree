import { imagePaths } from '@lib/constant';
import { cn } from '@lib/utils';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

interface IProps {
  className?: string;
}

const Nav: React.FC<IProps> = ({ className }) => {
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const navHeight = nav.offsetHeight;
    const navLinks = nav.querySelectorAll("a[href*='#']:not([href='#'])");

    navLinks.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        const href = item.getAttribute('href');

        if (href !== null) {
          const cleanedHref = href.replace('/', '');
          const targetElement = document.querySelector(cleanedHref) as HTMLElement | null;

          if (targetElement) {
            const targetPos = targetElement.offsetTop;

            scroll({
              behavior: 'smooth',
              top: targetPos - navHeight,
            });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sY = scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((item) => {
        const sectionId = item.getAttribute('id');
        const sectionTop = item.offsetTop - 250;
        const sectionBottom = sectionTop + item.offsetHeight;

        const navLink = document.querySelector(`nav a[href*=${sectionId}]`);

        if (navLink) {
          if (sY > sectionTop && sY <= sectionBottom) navLink.classList.add('active');
          else navLink.classList.remove('active');
        }
      });
    };

    handleScroll();
    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(className)}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo_container">
            <img src={imagePaths.logo} alt="" />
          </div>
          <ul className="nav_items">
            <li className="nav_item">
              <Link href="#home" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#about" className="nav_link">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#what_we_do" className="nav_link">
                What we do
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#team" className="nav_link">
                Our team
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#work" className="nav_link">
                Recent work
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#blogs" className="nav_link">
                Latest news
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#videos" className="nav_link">
                Latest videos
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#testimonial" className="nav_link">
                Testimonial
              </Link>
            </li>
          </ul>
          <div className="btn_container">
            <Button type="link" icon={<FaPhoneAlt />} href="tel:+909080804044">
              +9090 8080 4044
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
