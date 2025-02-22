import SectionTitle from './SectionTitle';

function Footer() {
  return (
    <SectionTitle className="py-4">
      <footer className="flex justify-center items-center pt-10 pb-6 border-t border-t-[#343434]">
        <p className="text-sm text-gray-400">
          Copyright (c) {new Date().getFullYear()} - Alif Dwi Rahman
        </p>
      </footer>
    </SectionTitle>
  );
}

export default Footer;
