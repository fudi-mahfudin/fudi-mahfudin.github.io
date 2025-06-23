import { CV_URL } from '@/lib/data';
import { permanentRedirect } from 'next/navigation';

export default function cv() {
  permanentRedirect(CV_URL);
}
