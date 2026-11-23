// Single place for launch state and prices. Flip `launched` to swap the waitlist for the App Store button.
export const config = {
  /** false = email waitlist; true = "Download on the App Store" badge + Smart App Banner. */
  launched: false,

  /** Numeric App Store ID (from App Store Connect). Used for the badge link and the Smart App Banner. */
  appStoreId: 'APP_STORE_ID',

  /** Provisional prices: keep in sync with App Store Connect before launch. */
  prices: {
    weekly: '$4.99',
    yearly: '$39.99',
    yearlyPerWeek: '$0.77',
    trialDays: 7,
    /** Shown before launch only: prices are not final until the App Store shows them. */
    provisional: true,
  },

  /** Waitlist backend: Supabase project "Lovepins US". The publishable key is public by design (same as in the app);
   *  it can only call public.join_waitlist, see Lovepins/supabase/migrations/20261123_waitlist.sql. */
  supabaseUrl: 'https://soczvvsssxjmgwhkdbzs.supabase.co',
  supabasePublishableKey: 'sb_publishable_3nLofy6oCVQyqpEg8QZ0ig_lP5_oT7s',

  siteUrl: 'https://lovepins.app',
  contactEmail: 'hello@lovepins.app',
  appleEulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
};

export const appStoreUrl = `https://apps.apple.com/app/id${config.appStoreId}`;
