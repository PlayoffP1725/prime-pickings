export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-white mb-2">
            Prime<span className="text-yellow-400">Pickings</span>
          </p>
          <p className="text-sm mb-4">
            Your daily source for the best Amazon deals
          </p>

          {/* Affiliate Disclosure */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-xs">
              <strong className="text-white">Affiliate Disclosure:</strong> As an Amazon Associate,
              we earn from qualifying purchases. This means we may receive a small commission
              when you click on links and make purchases, at no additional cost to you.
            </p>
          </div>

          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs mt-6">
            &copy; {new Date().getFullYear()} PrimePickings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
